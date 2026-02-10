export async function onRequestPost({ request, env }) {
  try {
    if (!env.GITHUB_TOKEN) {
      return new Response(JSON.stringify({ message: 'Missing GITHUB_TOKEN' }), { status: 500 });
    }

    const { endpoint, data } = await request.json();

    const endpointConfig = {
      services: { filename: 'servicesData.json', section: 'Services', wrapKey: 'services' },
      team: { filename: 'teamData.json', section: 'Team' },
      testimonials: { filename: 'testimonailData.json', section: 'Testimonials' },
      features: { filename: 'featuresData.json', section: 'Features', wrapKey: 'features' },
      about: { filename: 'aboutData.json', section: 'About Section' },
      whyChooseUs: { filename: 'sectionsData.json', section: 'Why Choose Us', mergeKey: 'whyChooseUs' },
      howItWorks: { filename: 'sectionsData.json', section: 'How It Works', mergeKey: 'howItWorks' },
      projects: { filename: 'projectData.json', section: 'Projects' },
      contact: { filename: 'contact.json', section: 'Contact Info' },
      footer: { filename: 'footerData.json', section: 'Footer' }
    };

    const config = endpointConfig[endpoint];
    if (!config) {
      return new Response(JSON.stringify({ message: `Unknown endpoint: ${endpoint}` }), { status: 400 });
    }

    const owner = env.GITHUB_REPO_OWNER || 'cleansolution';
    const repo = env.GITHUB_REPO_NAME || 'landing';
    const branch = env.GITHUB_REPO_BRANCH || 'main';
    const token = env.GITHUB_TOKEN;

    const filePath = `src/data/${config.filename}`;
    const getUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`;

    const getRes = await fetch(getUrl, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    let sha = null;
    let existingJson = null;

    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha || null;
      if (fileData.content) {
        try {
          const decoded = atob(fileData.content.replace(/\n/g, ''));
          const bytes = Uint8Array.from(decoded, c => c.charCodeAt(0));
          const text = new TextDecoder('utf-8').decode(bytes);
          existingJson = JSON.parse(text);
        } catch (error) {
          existingJson = null;
        }
      }
    }

    let finalData = data;
    if (config.mergeKey) {
      const base = existingJson && typeof existingJson === 'object' ? existingJson : {};
      finalData = { ...base, [config.mergeKey]: data };
    } else if (config.wrapKey) {
      if (data && typeof data === 'object' && data[config.wrapKey]) {
        finalData = data;
      } else {
        finalData = { [config.wrapKey]: data };
      }
    }

    const jsonContent = JSON.stringify(finalData, null, 2);
    const contentBase64 = btoa(unescape(encodeURIComponent(jsonContent)));
    const timestamp = new Date().toISOString().replace('T', ' ').replace('Z', ' UTC');
    const message = `Auto-update: ${config.section} - ${timestamp}`;

    const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
        content: contentBase64,
        sha,
        branch
      })
    });

    if (!putRes.ok) {
      const error = await putRes.json().catch(() => ({}));
      return new Response(JSON.stringify({ message: error.message || 'GitHub commit failed' }), { status: 500 });
    }

    const result = await putRes.json();
    return new Response(JSON.stringify({ success: true, message: `${config.section} committed`, url: result.commit?.html_url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message || 'Unexpected error' }), { status: 500 });
  }
}
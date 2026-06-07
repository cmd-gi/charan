module.exports = async (req, res) => {
  try {
    const host = req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `https://${host}`);

    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
    });

    const mod = await import('@tanstack/react-start/server-entry');
    const server = (mod.default ?? mod);

    const response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};

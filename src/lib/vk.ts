export function getVkEmbedSrc(url: string): string | null {
  const match = url.match(/(?:video|clip)(-?\d+)_(\d+)/);
  if (!match) return null;
  const [, oid, id] = match;
  return `https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2`;
}

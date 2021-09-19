export const createVideoImageUrl = (url) => {
  const parts = url.split("/");
  const id = parts[parts.length - 1].split("=")[1];
  return `https://img.youtube.com/vi/${id}/0.jpg`;
};

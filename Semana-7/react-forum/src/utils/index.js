const TEXT_MAX_LENGTH = 50;

function previewText(text) {
  if (text.length > TEXT_MAX_LENGTH) {
    return `${text.substring(0, TEXT_MAX_LENGTH)}...`;
  }

  return text;
}

function formatDate(milliseconds) {
  return new Date(milliseconds).toLocaleString();
}

export { previewText, formatDate };

export default function formatCommentText(length) {
  if (length === 0) return ` comments`
  if (length === 1) return ` comment`
  return ` comments`
}

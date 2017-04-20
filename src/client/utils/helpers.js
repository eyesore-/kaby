// Helper functions

// Extract category from input
export const extractCategory = input => {
  const regexPattern = /^\+(.\S+)/
  const matches = input.match(regexPattern)
  return matches ? matches[1] : matches
}

// Extract text from input
export const extractText = input => {
  const category = extractCategory(input)
  if (category) {
    const regexPattern = /^\+\w+\s(.+)/
    const matches = input.match(regexPattern)
    return matches[1]
  }
  return input
}

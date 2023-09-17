export function validatePage(actualPage: number, totalPages: number) {
  if (actualPage === undefined) return 1;
  if (actualPage > totalPages) return 1;
  return actualPage;
}

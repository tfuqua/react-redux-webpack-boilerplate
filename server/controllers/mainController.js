export function getTestData(req, res) {
  const employees = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Anna', lastName: 'Smith' },
    { firstName: 'Peter', lastName: 'Jones' }
  ];
  res.json({ data: employees });
}

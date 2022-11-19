const collections = [
  {
    id: 1,
    name: 'Collection 1',
  },
  {
    id: 2,
    name: 'Collection 2',
  },
];

export default function handler(req, res) {
  res.status(200).json(collections);
}

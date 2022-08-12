import fsPromises from 'fs/promises';
import path from 'path';

export default async function getData() {
  const filePath = path.join(process.cwd(), 'json');
  const jsonData = await fsPromises.readFile(filePath + '/data.json');
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

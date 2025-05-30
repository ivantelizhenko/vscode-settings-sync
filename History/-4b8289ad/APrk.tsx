import { ChangeEvent, useState } from 'react';

const style = 'input text-[1.6rem] p-[1.6rem] w-full ';

function Input({ className }: { className?: string }) {
  const [url, setUrl] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
    console.log(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Enter repo URL"
      className={style + ' ' + className}
      value={url}
      onChange={handleChange}
    />
  );
}

export default Input;

const token = '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';
const owner = 'vuejs';
const repo = 'vue';

async function getData() {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  const data = await res.json();
  const myData = data.map(issue => ({
    comments: issue.comments,
    title: issue.title,
    lastUpdate: issue.updated_at,
    number: issue.number,
    author: issue.user.login,
  }));
  console.log(data);
}
getData();

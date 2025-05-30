const style = '';

function Link({ className, url }: { className?: string; url: string }) {
  return (
    <a href={url} className={style + ' ' + className}>
      Link
    </a>
  );
}

export default Link;

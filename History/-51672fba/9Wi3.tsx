import Field from './Field';

function Fields() {
  return (
    <div className="bg-orange-400 h-full flex gap-[2.4rem] ">
      <Field title={ToDo} />
      <Field title={} />
      <Field title={} />
    </div>
  );
}

export default Fields;

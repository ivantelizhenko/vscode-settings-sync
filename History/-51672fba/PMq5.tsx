import Field from './Field';

function Fields() {
  return (
    <div className=" h-full flex gap-[2.4rem] ">
      <Field title="ToDo" />
      <Field title="In Progress" />
      <Field title="Done" />
    </div>
  );
}

export default Fields;

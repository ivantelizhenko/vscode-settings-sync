function Textarea({ ...other }) {
  return (
    <textarea
      className="border border-solid border-gray-400 focus:border-black text-[1.6rem]"
      {...other}
    />
  );
}

export default Textarea;

function FormRow() {
  return (
    <FormRow>
      <Label htmlFor="description">Description for website</Label>
      <Textarea
        type="number"
        id="description"
        defaultValue=""
        {...register('description', {
          required: 'This field is required',
        })}
      />
      {errors?.description && <Error>{errors?.description.message}</Error>}
    </FormRow>
  );
}

export default FormRow;

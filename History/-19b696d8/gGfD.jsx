import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

function UpdateSettingsForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image: image }, id: editId },
        { onSuccess: () => reset() }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => reset(),
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights" />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests" />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input type="number" id="breakfast-price" />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

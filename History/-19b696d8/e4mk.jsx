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

  function onSubmit(data) {}

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights" {...register('name')} />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" {...register('name')} />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests" {...register('name')} />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input type="number" id="breakfast-price" {...register('name')} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

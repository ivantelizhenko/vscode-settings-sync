import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';

function UpdateSettingsForm() {
  const { isLoading, settings } = useSettings();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { settings },
  });

  function onSubmit(data) {}

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights" {...register('min-nights')} />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" {...register('max-nights')} />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests" {...register('max-guests')} />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          {...register('breakfast-price')}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

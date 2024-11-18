import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { add, getById, update } from '../../services/foodService';
import { uploadImage } from '../../services/uploadService';
import { toast } from 'react-toastify';
import Title from '../../components/Title/Title';
import InputContainer from '../../components/InputContainer/InputContainer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import classes from './foodEdit.module.css';

export default function FoodEditPage() {
  const { foodId } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const isEditMode = !!foodId;
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!isEditMode) {
      setLoading(false);
      return;
    }

    const fetchFoodData = async () => {
      try {
        const food = await getById(foodId);
        if (food) {
          reset(food);
          setImageUrl(food.imageUrl);
        } else {
          toast.error('Food not found.');
          navigate('/admin/food');
        }
      } catch (error) {
        toast.error('Failed to fetch food data.');
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, [foodId, isEditMode, reset, navigate]);

  const submit = async foodData => {
    const food = { ...foodData, imageUrl };

    try {
      if (isEditMode) {
        await update(food);
        toast.success(`Food "${food.name}" updated successfully!`);
      } else {
        const newFood = await add(food);
        toast.success(`Food "${food.name}" added successfully!`);
        navigate('/admin/editFood/' + newFood.id, { replace: true });
      }
    } catch (error) {
      toast.error('Failed to save food data.');
    }
  };

  const upload = async event => {
    setImageUrl(null);
    try {
      const imageUrl = await uploadImage(event);
      setImageUrl(imageUrl);
    } catch (error) {
      toast.error('Failed to upload image.');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title title={isEditMode ? 'Edit Food' : 'Add Food'} />
        <form
          className={classes.form}
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <InputContainer label="Select Image">
            <input type="file" onChange={upload} accept="image/jpeg" />
          </InputContainer>

          {imageUrl && (
            <a href={imageUrl} className={classes.image_link} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} alt="Uploaded" />
            </a>
          )}

          <Input
            type="text"
            label="Name"
            {...register('name', { required: 'Name is required', minLength: { value: 5, message: 'Minimum length is 5' } })}
            error={errors.name?.message}
          />

          <Input
            type="number"
            label="Price"
            {...register('price', { required: 'Price is required' })}
            error={errors.price?.message}
          />

          <Input
            type="text"
            label="Tags"
            {...register('tags')}
            error={errors.tags?.message}
          />

          <Input
            type="text"
            label="Origins"
            {...register('origins', { required: 'Origins are required' })}
            error={errors.origins?.message}
          />

          <Input
            type="text"
            label="Cook Time"
            {...register('cookTime', { required: 'Cook time is required' })}
            error={errors.cookTime?.message}
          />

          <Button type="submit" text={isEditMode ? 'Update' : 'Create'} />
        </form>
      </div>
    </div>
  );
}

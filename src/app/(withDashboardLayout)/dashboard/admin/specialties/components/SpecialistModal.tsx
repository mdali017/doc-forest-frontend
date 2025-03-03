import PHFileUpload from "@/components/Forms/PHFileUpload";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(values);
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Specialty created successfully !!");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <PHModal open={open} setOpen={setOpen} title="Create A New Speciallist">
        <PHForm onSubmit={handleFormSubmit}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Grid item md={6}>
              <PHInput name="title" label="Title" />
            </Grid>
            <Grid item md={6}>
              <PHFileUpload name="file" label="" />
            </Grid>
          </Grid>
          <Button type="submit">Create</Button>
        </PHForm>
      </PHModal>
    </div>
  );
};

export default SpecialistModal;

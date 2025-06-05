import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

interface DynamicFormProps {
    itemType: "testimonial" | "feature" | "plan";
}

export function DynamicForm({ itemType }: DynamicFormProps) {
    const { register, handleSubmit } = useForm();


    const onSubmitt = (data: any) => {
        console.log(itemType)
        console.log("Form data:", data);
        // You can now use `data` to send to an API, update state, etc.
    };


    const renderFields = () => {
        switch (itemType) {
            case "testimonial":
                return (
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input {...register("name")} placeholder="Name" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="audience">Quote</Label>

                            <Input {...register("quote")} placeholder="Quote" />

                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="price">Role</Label>
                            <Input {...register("role")} placeholder="Role" />


                        </div>

                    </div>
                );
            case "feature":
                return (
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>

                            <Input {...register("title")} placeholder="Title" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>

                            <Textarea {...register("description")} placeholder="Description" />
                        </div>
                    </div>
                );
            case "plan":
                return (

                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input {...register("name")} placeholder="Plan Name" id="name" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="audience">Audience</Label>
                            <Input {...register("audience")} placeholder="For individuals" id="audience" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="price">Price</Label>
                            <Input {...register("price")} placeholder="Price" type="number" id="price" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="currency">Currency</Label>
                            <Input {...register("currency")} placeholder="USD" id="currency" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="billing_cycle">Billing Cycle</Label>
                            <Input {...register("billing_cycle")} placeholder="monthly / yearly / custom" id="billing_cycle" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="features">Features</Label>
                            <Textarea
                                {...register("features")}
                                placeholder="Comma-separated features"
                                id="features"
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="is_free">Is Free?</Label>
                            <Switch id="is_free" {...register("is_free")} />
                        </div>
                    </div>




                );
            default:
                return <div>Unsupported type</div>;
        }
    };

    return <form onSubmit={handleSubmit(onSubmitt)}>{renderFields()}<Button type="submit">Add</Button></form>;
}

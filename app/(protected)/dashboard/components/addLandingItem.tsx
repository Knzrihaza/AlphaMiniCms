import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DynamicForm } from "../lib/dynamicForms";
import { Button } from "@/components/ui/button";

interface ReusableAddItemDialogProps {

    itemType: "testimonial" | "feature" | "plan";
}




export function ReusableAddItemDialog({
    itemType,
}: ReusableAddItemDialogProps) {
    return (
        <Dialog  >
            <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>

                <DialogTitle>Add New {itemType}</DialogTitle>
                <DynamicForm itemType={itemType} />
            </DialogContent>
        </Dialog>
    );
}
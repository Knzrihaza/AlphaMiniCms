// components/ui/DialogButton.tsx
import { ReactNode } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DialogButtonProps {
    open: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    buttonLabel: string;
    title: string;
    description?: string;
    children: ReactNode;
    showCloseButton?: boolean;
    dialogSize?: string; // e.g., "sm:max-w-4xl"
}

export function DialogButton({
    open,
    setIsOpen,
    buttonLabel,
    title,
    description,
    children,
    showCloseButton = true,
    dialogSize = "sm:max-w-4xl",
}: DialogButtonProps) {
    return (
        <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">{buttonLabel}</Button>
            </DialogTrigger>
            <DialogContent className={dialogSize}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>

                {children}

                {showCloseButton && (
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
}

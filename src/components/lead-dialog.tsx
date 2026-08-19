"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface LeadDialogProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
}

export function LeadDialog({ trigger, title, description }: LeadDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      window.setTimeout(() => setSubmitted(false), 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-10 text-primary" />
            <p className="text-base font-medium">Заявка отправлена</p>
            <p className="text-sm text-muted-foreground">
              Мы перезвоним вам в ближайшее рабочее время
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              {description ? (
                <DialogDescription>{description}</DialogDescription>
              ) : null}
            </DialogHeader>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="lead-phone">Телефон</Label>
                <Input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="lead-agree" required defaultChecked />
                <Label
                  htmlFor="lead-agree"
                  className="text-xs font-normal text-muted-foreground"
                >
                  Согласен с политикой обработки персональных данных
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

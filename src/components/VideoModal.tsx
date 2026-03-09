import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface VideoModalProps {
  children: React.ReactNode;
}

const VideoModal = ({ children }: VideoModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>
      <DialogContent className="max-w-[900px] w-[95vw] p-0 border-none bg-black rounded-[16px] overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Watch Demo</DialogTitle>
        </VisuallyHidden>
        <video
          src="/videos/Samuk.mp4"
          controls
          autoPlay
          className="w-full h-auto max-h-[80vh] rounded-[16px]"
        />
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;

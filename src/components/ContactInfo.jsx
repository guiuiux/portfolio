import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function ContactInfo() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const email = "gferreira.uiux@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="flex gap-1 cursor-pointer font-light text-zinc-400 hover:text-zinc-50 items-center"
            onClick={handleCopy}
          >
            {copied ? (
              // Copied message overlay
              <span className="text-pink-500 flex gap-1">
                <span className="material-symbols-rounded">check</span>
                {t("Homepage.footer.copied")}
              </span>
            ) : (
              // Default email display with icons
              <>
                {/* Email Icon */}
                <div className="material-symbols-rounded text-start flex items-center">
                  <span className="text-[20px]">mail</span>
                </div>

                {/* Email Address */}
                <span>{email}</span>

                {/* Copy Icon */}
                <div className="flex items-center">
                  <div className="material-symbols-outlined text-start flex items-center">
                    <span className="text-[20px]">content_copy</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("Homepage.footer.tooltip")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

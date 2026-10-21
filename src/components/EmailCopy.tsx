import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

import { Mail, Copy } from "lucide-react";

export default function ContactEmail() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const email = "gferreira.uiux@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };

  return (
    <div className="flex flex-row gap-4 items-center min-h-9 w-full ">
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? t("footer.contact-card.copy-alert") : ""}
      </span>
      {!copied ? (
        <>
          <div className="flex flex-row  items-center gap-1 border-b border-on-surface">
            <Mail size={16} />
            <a href={`mailto:${email}`} className="text-sm font-medium pb-1">
              {email}
            </a>
          </div>

          <Button
            className="text-xs uppercase rounded-full w-fit bg-primary text-on-primary hover:bg-primary-fixed hover:text-on-primary-fixed"
            onClick={handleCopy}
            size="sm"
          >
            {t("footer.contact-card.email-btn")}
            <Copy className="h-4" />
          </Button>
        </>
      ) : (
        <div className="text-sm font-medium text-on-surface" aria-hidden="true">
          {t("footer.contact-card.copy-alert")}
        </div>
      )}
    </div>
  );
}

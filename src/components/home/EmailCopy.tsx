import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

import { Mail } from "lucide-react";
import { ClipboardCopy } from "lucide-react";

import { color } from "@/lib/design-tokens";

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
    <div className="flex flex-row gap-4 items-center min-h-9 w-full">
      {!copied ? (
        <>
          <div className="flex flex-row items-center gap-1">
            <Mail size={"16px"} />
            <a
              href={`mailto:${email}`}
              className="text-sm font-medium underline"
            >
              {email}
            </a>
          </div>

          <Button
            className="text-xs uppercase rounded-full w-fit gap-2"
            onClick={handleCopy}
            size={"sm"}
            style={{
              color: color.light.onPrimaryContainer,
              backgroundColor: color.light.primaryContainer,
            }}
          >
            {t("home.footer.contact-card.email-btn")}
            <ClipboardCopy fontSize="inherit" />
          </Button>
        </>
      ) : (
        <div
          className="text-sm font-medium "
          style={{
            color: color.light.onPrimaryContainer,
          }}
        >
          {t("home.footer.contact-card.copy-alert")}
        </div>
      )}
    </div>
  );
}

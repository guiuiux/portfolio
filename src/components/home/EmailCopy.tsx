import { useState } from "react";
import { Button } from "@/components/ui/button";
import MailOutlineIcon from "@mui/icons-material/MailOutline"; // ajuste conforme seu import
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // ajuste conforme seu import
import { useTranslation } from "react-i18next";

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
    <div className="flex flex-row gap-4 items-center min-h-9">
      {!copied ? (
        <>
          <div className="flex flex-row items-center gap-1">
            <MailOutlineIcon />
            <a
              href={`mailto:${email}`}
              className="text-sm font-medium underline"
            >
              {email}
            </a>
          </div>

          <Button
            className="text-sm uppercase rounded-full flex items-center gap-1"
            onClick={handleCopy}
          >
            {t("home.footer.contact-card.email-btn")}
            <ContentCopyIcon fontSize="inherit" />
          </Button>
        </>
      ) : (
        <div className="text-sm font-medium ">
          {t("home.footer.contact-card.copy-alert")}
        </div>
      )}
    </div>
  );
}

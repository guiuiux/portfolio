import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState(null); // Corrected initialization
  const { t } = useTranslation();

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/guiuiux/portfolio/commits/main",
        );
        const data = await response.json();

        if (data && data.commit && data.commit.committer) {
          // Check for valid data structure
          const commitDate = new Date(data.commit.committer.date);

          // Format date as needed
          const formattedDate = commitDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });

          setLastUpdated(formattedDate);
        } else {
          console.error("Unexpected API response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching last commit:", error);
      }
    };

    fetchLastCommit();
  }, []);

  return (
    <div className="text-sm text-zinc-500">
      {lastUpdated
        ? `${t("Homepage.footer.updated")} ${lastUpdated}, São Paulo`
        : "Loading..."}
    </div>
  );
};

export default LastUpdated;

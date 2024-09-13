'use client'

import React, { useEffect, useState } from 'react';

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/guiuiux/portfolio/commits/main'
        );
        const data = await response.json();
        const commitDate = new Date(data.commit.committer.date);

        // Format date as needed
        const formattedDate = commitDate.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });

        setLastUpdated(formattedDate);
      } catch (error) {
        console.error('Error fetching last commit:', error);
      }
    };

    fetchLastCommit();
  }, []);

  return (
    <div className="text-sm text-zinc-500">
      {lastUpdated ? `last updated ${lastUpdated}, São Paulo` : 'Loading...'}
    </div>
  );
};

export default LastUpdated;

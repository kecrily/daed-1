import { Button, LinearProgress, Stack } from "@mui/material";
import { useIsFetching } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

import { ImportFormDialog } from "~/components/ImportFormDialog";
import { Sidebar } from "~/components/Sidebar";

export const Home = () => {
  const { t } = useTranslation();
  const fetching = useIsFetching();
  const [showImportModal, setShowImportModal] = useState(false);

  return (
    <Stack direction="row" height="100dvh" p={2} gap={2} position="relative">
      {fetching > 0 && <LinearProgress sx={{ position: "absolute", top: 4, insetInline: 16 }} />}

      <Sidebar />

      <Stack flex={1}>
        <Stack alignItems="end">
          <Button variant="outlined" onClick={() => setShowImportModal(true)}>
            {t("actions.import")}
          </Button>
        </Stack>

        <Outlet />
      </Stack>

      <ImportFormDialog open={showImportModal} close={() => setShowImportModal(false)} />
    </Stack>
  );
};

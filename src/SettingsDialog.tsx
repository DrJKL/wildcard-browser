import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { WildcardSettings } from './lib/Settings';

export interface SettingsDialogProps {
  open: boolean;
  onClose: () => void;
  settings: WildcardSettings;
  updateSettings: (newSettings: WildcardSettings) => void;
}

export function SettingsDialog({
  open,
  onClose,
  settings,
  updateSettings,
}: SettingsDialogProps) {
  const changeWrapper = (wildcardWrap: string) => {
    updateSettings({ ...settings, wildcardWrap });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Wildcard Browser Settings</DialogTitle>
      <DialogContent>
        <TextField
          label="Wrap"
          variant="filled"
          value={settings.wildcardWrap}
          onChange={(event) => changeWrapper(event.target.value)}></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

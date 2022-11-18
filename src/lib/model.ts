export interface ButtonCommand {
  icon?: string
  title: string
  command: () => {}
}

export interface DialogConfig {
  text: string;
  buttons: ButtonCommand[]
}

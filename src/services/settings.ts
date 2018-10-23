
export class SettingsService{
   private altBackgroundToggle = false;
    setBackground(isAlt:boolean){
        this.altBackgroundToggle = isAlt;
    }

    isAltBackground(){
        return this.altBackgroundToggle;
    }
}
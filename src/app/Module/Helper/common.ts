import { OnInit } from "@angular/core";
import { AuthService } from "../../Service/Auth/auth.service";
import { Router } from "@angular/router";
import { MatDialog } from "../../../../node_modules/@angular/material";
import { AlertMessageComponent } from "../../alert-message/alert-message.component";

export abstract class Common implements OnInit {
    constructor(public router: Router){
    }
    private auth: AuthService = new AuthService();

    ngOnInit(){
    }

    Logout(){
        localStorage.clear();
        this.router.navigateByUrl('/login');        
    }

    OpenDialog(matDialog: MatDialog, message: string, title: string): void{
        const dialogRef = matDialog.open(AlertMessageComponent,
        {
            width: "400px",
            data: {title: title, content: message}
        });
        
        dialogRef.afterClosed().subscribe(result =>{      
        });
    }

}

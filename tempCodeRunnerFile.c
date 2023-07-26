#include <stdio.h>

int main(void){
     int a[2];
     for (i=0; i<2; i++){
          printf("inserisci numero %d", i);
          scanf("%d", a[i]);
     }
     if (a[0]==a[1]){
          printf("\ni numeri sono ugual");
     }
     return 0;
}
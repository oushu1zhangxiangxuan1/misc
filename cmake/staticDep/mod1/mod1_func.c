#include <stdio.h>
#include "mod1.h"
#include "mod1_func.h"
#include "mod2/mod2.h"
void mod1_func(){
    mod2_func();
    printf("mod1: %d \n", GLOBAL_MOD1_VAR);
}
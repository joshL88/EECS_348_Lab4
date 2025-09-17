#include "isOdd.h"

#include <stdio.h>

//takes a number and prints if the number is odd
int isOdd(int num)
{
	//checks if the number is not divisible by 2
	if (num % 2 == 1){

		//prints out that the number is odd
		 printf("%d is odd.\n", num);
	}
	return 0;
}

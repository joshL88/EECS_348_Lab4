#stores gcc compilier as variable for use 
CC=gcc

#creates a main executable using the given target files
main: isEven.c isOdd.c main.c
	$(CC) isEven.c isOdd.c main.c -o main

#clears all .o files and the created main executable
clean:
	rm -rf *.o main
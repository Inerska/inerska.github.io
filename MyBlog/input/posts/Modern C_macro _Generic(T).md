title: Modern C » _Generic(T)
tag: C
published: 6/26/2021
---

​	Normally, in C, when you want to overload a function, you have to create the same for the amount of types you want to handle.

```c
double mind(double, double);
int mini(int, int);
```

```c
int
main(void)
{
    double x = 12.5;
    double y = 22.0;
    printf("The min value between 12.5 and 22.0 is %lf\n", mind(x, y));
}
```

But in modern C (since C11), you can "iterate through types" like a `switch` but for types, and thanks to that, you can overload a function like in a high-level programming language.

```c
double mind(double, double);
int mini(int, int);


#define min(a, b) _Generic((a), \
					int: mini(a, b), \
					double: mind(a, b)\
				)

```

```c
int
main(void)
{
    int x = 12;
    int y = 22;
    printf("The minimal value between 12 and 22 is %d\n", min(x, y));
    
    double dx = 15.5;
    double dy = 13.2;
    printf("The minimal value between 15.5 and 13.2 is %lf\n", min(dx, dy));
}
```

And with the same function `T min(T, T)` you can handle multiple types. 

Now you know about `_Generic(T)` try to overload your personal function like a maximum function `max(T, T)` with `_Generic()` macro, glhf.
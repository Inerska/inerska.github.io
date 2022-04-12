title: How to edit a default immutable string without creating a copy

published: 4/12/2022

tag: csharp

---

Regarding the MSDN docs about the String class, it's an immutable array of characters. Even if you try to change it, like using the ToUpper() method or ToLower(), it will give you a copy of your string.

>  [String Class (System) | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=net-6.0)



```csharp
/// <summary>

/// The goal of this function is to lower a string.

/// In the game, it will appear as a whisper.

/// </summary>

public static void Whishiper(this String source)

{

    source = source.ToLower();

    Console.WriteLine("It looks like someone's seems saying something.");

}

public static void Main()

{

    User bob = new User("Bob", UserType.Gangster);

    User remy = new User("Rémy", UserType.Victim);

    var warningMessage = "Be careful, I won't kill you !";

    bob.TalksWith(remy, warningMessage.Whishiper());

}
```



This snippet, will create two users, Bob and Rémy, Bob's talking with Rémy the warning message, "Be careful, I won't kill you !". Obviously if you have some experiences in programming, thanks to the method extension on String, which is a bad idea by the way, will lower the message to "be careful, i won't kill you !". However, the ToLower() method will be returned by copy.

> [String.ToUpper Method (System) | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/api/system.string.toupper?view=net-6.0)



Every String methods return a copy of the string, because String is immutable by default in C# and a lot of other languages.

Notwithstanding something exists to overcome this issue even if it's not an actual one, in a rare situation when you will need to edit a String and you don't want a copy but a reference, for optimization purposes for example, you can use fixed in an unsafe block.

In brief, the fixed keyword is rarely used when you want to fix the variable in memory, I will talk more about it in a next article.

If you want to use unsafe keywords inside your code you have to enable it in your .csproj file.



`<AllowUnsafeBlocks>true</AllowUnsafeBlocks>`



```csharp
string ReplaceFirstLetterWith(string source, char replacedCharacter)

{

        return source.Replace(source.ElementAt(0), replacedCharacter);

}   

Console.WriteLine(ReplaceFirstLetterWith("Bello World!", 'h'));
```

*FYI: this code is pretty bad because we are not checking if the string is null/empty*

This snippet will replace the first letter with another character and results in "hello World!", pretty good right ? But the .Replace() method will return a copy, and that may be something we don't want.

```csharp
unsafe void ReplaceFirstLetterWith(string source, char replacedCharacter)

{

        fixed(char* ptr = source)

        {

                ptr[0] = replacedCharacter;

        }

}

const string sourceExample = "Hello World";

ReplaceFirstLetterWith(sourceExample, 'h');

Console.WriteLine(sourceExample);
```

This snippet will result the same, except that we are modifying the source value and not making a copy anymore. A lot of times, you don't want to do it that way. But it's a good thing to know in my opinion.

We are making a pointer in source and editing the unreferenced pointered first character of the string, easy right ?

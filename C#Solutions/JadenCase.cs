using System;
public static class JadenCase
{
  public static string ToJadenCase(this string phrase)
  {
    String[] stringList = phrase.Split(" ");
    for (var i=0; i<stringList.Length; i++) {
      stringList[i] = char.ToUpper(stringList[i][0]) + stringList[i].Substring(1);
    }
    return String.Join(" ", stringList);
  }
}

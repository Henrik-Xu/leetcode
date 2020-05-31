using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ConApp
{
   public class ConvertTool
    {
        public string TestString = "JournalLeger(Add,A,B,C,D,E,F,GenelLeger((1,2,3),(4,5,6),(7,8,9)),Decription(H))";

        public string BuildMsg()
        {
            string input = "JournalLeger(Add,A,B,C,D,E,F,GenelLeger((1,2,3),(4,5,6),(7,8,9)),Decription(H))";

            string[] parts = splitString(input,'(',')');
            StringBuilder builder = new StringBuilder();
            foreach (string part in parts)
            {
                string[] subs = part.Split(',');
                bool hasNum = HasNumber(subs);
                if (hasNum)
                {
                    if(IsNumber(part))
                    {
                        builder.Append(Flip(part));
                        continue;
                    }
                }
                builder.Append(part);
            }
            return builder.ToString() ;
        }

        // 需要引入命名空间
        // using System;
        // using System.Linq;

        public string[] splitString(string source_str, char separator)
        {
            //1. 判断 source string 是否包含 separator
            //1.1 string 中不包括分隔符
            if (source_str.IndexOf(separator) == -1)
            {
                //为了返回原字符串，将其包成一个只有一项的string数组返回
                string[] source_str_pack = new string[1];//试一试string[source_str]
                source_str_pack[0] = source_str;
                return source_str_pack;
            }
            //1.2 string 中包括分隔符
            else
            {
                //2. 将 source_str 转换为 char 数组
                char[] source = source_str.ToCharArray();
                string temp = "";
                int resultID = 0;
                string[] result = new string[source.Length];//这样的结果会有大量的 null 元素，后面在返回结果前，进行处理去除无用的 null 元素
                //3. 对数组每个字符依次进行检测
                for (int i = 0; i < source.Length; i++)
                {
                    //3.1 若不为分隔符，则先将内容存入临时 string 变量 temp
                    if (!source[i].Equals(separator))
                    {
                        temp = temp.Insert(temp.Length, source[i].ToString());
                    }
                    //3.2 若为分隔符，则检测 temp 是否为空
                    else
                    {
                        //temp不为空，先将 temp 变量的值写入 result 数组
                        if (temp != null)
                        {
                            result[resultID] = temp;
                            resultID++;
                            temp = null;
                        }
                        //将分隔符写入 result 数组
                        result[resultID] = source[i].ToString();
                        resultID++;
                    }
                }
                //4. 检查 temp 变量是否为 null
                //若不为空，先将其写入 result 数组
                if (temp != null)
                {
                    result[resultID] = temp;
                    resultID++;
                    temp = null;
                }
                //返回 string 数组 result
                //后面在返回结果前，进行处理去除无用的 null 元素
                result = result.Where(s => !String.IsNullOrEmpty(s)).ToArray();
                return result;
            }
        }

        public string[] splitString(string source_str,params char[] separators)
        {
            var dic = new Dictionary<char, int>();
            foreach (var separator in separators)
            {
                if (dic.ContainsKey(separator)) continue;

                dic.Add(separator, 1);
            }
            if(dic.Count==0)
            {
                string[] source_str_pack = new string[1];//试一试string[source_str]
                source_str_pack[0] = source_str;
                return source_str_pack;
            }
            //2. 将 source_str 转换为 char 数组
            char[] source = source_str.ToCharArray();
            string temp = "";
            int resultID = 0;
            string[] result = new string[source.Length];//这样的结果会有大量的 null 元素，后面在返回结果前，进行处理去除无用的 null 元素
                                                        //3. 对数组每个字符依次进行检测
            for (int i = 0; i < source.Length; i++)
            {
                //3.1 若不为分隔符，则先将内容存入临时 string 变量 temp
                if (! dic.ContainsKey(source[i]))
                {
                    temp += source[i];
                }
                //3.2 若为分隔符，则检测 temp 是否为空
                else
                {
                    //temp不为空，先将 temp 变量的值写入 result 数组
                    if (temp != null)
                    {
                        result[resultID] = temp;
                        resultID++;
                        temp = null;
                    }
                    //将分隔符写入 result 数组
                    result[resultID] = source[i].ToString();
                    resultID++;
                }
            }
            //4. 检查 temp 变量是否为 null
            //若不为空，先将其写入 result 数组
            if (temp != null)
            {
                result[resultID] = temp;
                resultID++;
                temp = null;
            }
            //返回 string 数组 result
            //后面在返回结果前，进行处理去除无用的 null 元素
            result = result.Where(s => !String.IsNullOrEmpty(s)).ToArray();
            return result;
        }

        public string Flip(string s)
        {
            return s;
        }

        public bool HasNumber(string[] s)
        {
            bool hasNumber = false;
            foreach (var item in s)
            {
                if(IsNumber(item))
                {
                    hasNumber = true;
                    break;
                }
            }
            return hasNumber;
        }

        public  bool IsNumber(string s)
        {
              if (string.IsNullOrWhiteSpace(s)) return false;
              const string pattern = "^[0-9]*$";
              Regex rx = new Regex(pattern);
              return rx.IsMatch(s);
         }

        public string findSubMsg(string source,string key)
        {
            string sub = source.Substring(source.IndexOf(key));

            return "";
        }
    }
}

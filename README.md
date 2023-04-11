# SuperDecimal
SuperDecimal类使用JavsScript中的BigInt（ES2017中的一个新的特性），去解决大数字的计算，以及由于浮点数字的标准数字引起的计算精准度的问题[详情可以参考IEEE-754](http://c.biancheng.net/view/314.html)

# API

<a name="SuperDecimal"></a>
**Kind**: global class  

* [SuperDecimal](#superdecimal)
  * [new SuperDecimal(numeric)](#new_SuperDecimal_new)
  * [.DIVIDE_DECIMAL_PLACE](#SuperDecimal+DIVIDE_DECIMAL_PLACE)
  * [.integer](#SuperDecimal+integer) : <code>string</code>
  * [.inteLens](#SuperDecimal+inteLens) : <code>number</code>
  * [.decimal](#SuperDecimal+decimal) : <code>string</code>
  * [.decimalLen](#SuperDecimal+decimalLen) : <code>number</code>
  * [.isNegtive](#SuperDecimal+isNegtive) : <code>boolean</code>
  * [.bigint](#SuperDecimal+bigint) : <code>BigInt</code>
  * [.result](#SuperDecimal+result) : <code>string</code>
  * [.add(addtion)](#SuperDecimal+add) ⇒ [<code>SuperDecimal</code>](#superdecimal)
  * [.sub(substraction)](#SuperDecimal+sub) ⇒ [<code>SuperDecimal</code>](#superdecimal)
  * [.mutiply(base)](#SuperDecimal+mutiply) ⇒ [<code>SuperDecimal</code>](#superdecimal)
  * [.divide(divisor)](#SuperDecimal+divide) ⇒ [<code>SuperDecimal</code>](#superdecimal)
  * [.pow(n)](#SuperDecimal+pow) ⇒ [<code>SuperDecimal</code>](#superdecimal)
  * [.tostr()](#SuperDecimal+tostr) ⇒ <code>string</code>
  * [.toFixed(decimal)](#SuperDecimal+toFixed) ⇒ <code>string</code>

<a name="new_SuperDecimal_new"></a>

### new SuperDecimal(numeric)

SuperDecimal类的构造函数

| Param | Type | Description |
| --- | --- | --- |
| numeric | <code>string</code> \| <code>number</code> | 数字型的参数 |

<a name="SuperDecimal+DIVIDE_DECIMAL_PLACE"></a>

### superDecimal.DIVIDE\_DECIMAL\_PLACE

用来控制默认的小数点的位数

**Kind**: instance property of [<code>SuperDecimal</code>](#superdecimal)  
<a name="SuperDecimal+integer"></a>

### superDecimal.integer : <code>string</code>

整数部分

**Kind**: instance property of [<code>SuperDecimal</code>](#superdecimal)  
**Access**: public  
<a name="SuperDecimal+inteLens"></a>

### superDecimal.inteLens : <code>number</code>

整数部分字符长度

**Kind**: instance property of [<code>SuperDecimal</code>](#superdecimal)  
**Access**: public  
<a name="SuperDecimal+decimal"></a>

### superDecimal.decimal : <code>string</code>

小数部分

**Kind**: instance property of [<code>SuperDecimal</code>](#superdecimal)  
**Access**: public  
<a name="SuperDecimal+decimalLen"></a>

### superDecimal.decimalLen : <code>number</code>

小数部分字符长度

**Kind**: instance property of [<code>SuperDecimal</code>](#superdecimal)  
**Access**: public  
<a name="SuperDecimal+isNegtive"></a>

### superDecimal.isNegtive : <code>boolean</code>

数字的正负性

**Kind**: instance property of [<code>SuperDecimal</code>](#superdecimal)  
**Access**: public  
<a name="SuperDecimal+bigint"></a>

### superDecimal.bigint : <code>BigInt</code>

数字的BigInt的表示

**Kind**: instance property of [<code>SuperDecimal</code>](#superdecimal)  
**Access**: public  
<a name="SuperDecimal+result"></a>

### superDecimal.result : <code>string</code>

数字的字符形式

**Kind**: instance property of [<code>SuperDecimal</code>](#superdecimal)  
**Access**: public  
<a name="SuperDecimal+add"></a>

### superDecimal.add(addtion) ⇒ [<code>SuperDecimal</code>](#superdecimal)

两个数字相加

**Kind**: instance method of [<code>SuperDecimal</code>](#superdecimal)  

| Param | Type | Description |
| --- | --- | --- |
| addtion | [<code>SuperDecimal</code>](#superdecimal) | 加数 |

<a name="SuperDecimal+sub"></a>

### superDecimal.sub(substraction) ⇒ [<code>SuperDecimal</code>](#superdecimal)

两个数字相减

**Kind**: instance method of [<code>SuperDecimal</code>](#superdecimal)  

| Param | Type | Description |
| --- | --- | --- |
| substraction | [<code>SuperDecimal</code>](#superdecimal) | 减数 |

<a name="SuperDecimal+mutiply"></a>

### superDecimal.mutiply(base) ⇒ [<code>SuperDecimal</code>](#superdecimal)

当前SuperDecimal乘以另一个SuperDecimal

**Kind**: instance method of [<code>SuperDecimal</code>](#superdecimal)  

| Param | Type |
| --- | --- |
| base | [<code>SuperDecimal</code>](#superdecimal) |

<a name="SuperDecimal+divide"></a>

### superDecimal.divide(divisor) ⇒ [<code>SuperDecimal</code>](#superdecimal)

当前SuperDecimal除以另一个SuperDecimal

**Kind**: instance method of [<code>SuperDecimal</code>](#superdecimal)  

| Param | Type | Description |
| --- | --- | --- |
| divisor | [<code>SuperDecimal</code>](#superdecimal) | 除数 |

<a name="SuperDecimal+pow"></a>

### superDecimal.pow(n) ⇒ [<code>SuperDecimal</code>](#superdecimal)

计算幂函数，这里为了保障结果的精准性，将会尽可能保证小数的位数

**Kind**: instance method of [<code>SuperDecimal</code>](#superdecimal)  
**Returns**: [<code>SuperDecimal</code>](#superdecimal) - - 当前数字的幂函数的结果  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | 当前数字的幂函数 |

<a name="SuperDecimal+tostr"></a>

### superDecimal.tostr() ⇒ <code>string</code>

把当前的SuperDecimal的数字转化成数字的字符串输出

**Kind**: instance method of [<code>SuperDecimal</code>](#superdecimal)  
<a name="SuperDecimal+toFixed"></a>

### superDecimal.toFixed(decimal) ⇒ <code>string</code>

以字符的形式输出decimal小数位的字符

**Kind**: instance method of [<code>SuperDecimal</code>](#superdecimal)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| decimal | <code>number</code> | <code>10</code> | 保留小数的位数 |

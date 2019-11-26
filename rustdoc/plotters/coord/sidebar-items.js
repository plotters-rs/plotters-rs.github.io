initSidebarItems({"enum":[["MeshLine","Represent a coordinate mesh for the two ranged value coordinate system"]],"fn":[["make_partial_axis","Make a partial axis based on the percentage of visible portion. We can use `into_partial_axis` to create a partial axis range specification. But sometimes, we want to directly specify the percentage visible to the user."]],"struct":[["Category","The category coordinate"],["GroupBy","The ranged value spec that needs to be grouped. This is useful, for example, when we have an X axis is a integer and denotes days. And we are expecting the tick mark denotes weeks, in this way we can make the range spec grouping by 7 elements."],["LogCoord","A log scaled coordinate axis"],["LogRange","The decorator type for a range of a log-scaled value"],["RangedCoord","The coordinate described by two ranged value"],["RangedCoordf32","The ranged coordinate for type f32"],["RangedCoordf64","The ranged coordinate for type f64"],["RangedCoordi128","The ranged coordinate for type i128"],["RangedCoordi32","The ranged coordinate for type i32"],["RangedCoordi64","The ranged coordinate for type i64"],["RangedCoordu128","The ranged coordinate for type u128"],["RangedCoordu32","The ranged coordinate for type u32"],["RangedCoordu64","The ranged coordinate for type u64"],["RangedDate","The ranged coordinate for date"],["RangedDateTime","The ranged coordinate for the date and time"],["RangedDuration","The coordinate that for duration of time"],["Shift","The coordinate translation that only impose shift"],["ShiftAndTrans","We can compose an arbitrary transformation with a shift"]],"trait":[["AsRangedCoord","The trait for the type that can be converted into a ranged coordinate axis"],["CoordTranslate","The trait that translates some customized object to the backend coordinate"],["DiscreteRanged","The trait indicates the coordinate is discrete, so that we can draw histogram on it"],["IntoCentric","The trait for types that can decorated by `CentricDiscreteRange` decorator"],["IntoMonthly","The trait that converts a normal date coord into a yearly one"],["IntoPartialAxis","The trait for the types that can be converted into a partial axis"],["IntoYearly","The trait that converts a normal date coord into a yearly one"],["LogScalable","The trait for the type that is able to be presented in the log scale"],["Ranged","The trait that indicates we have a ordered and ranged value Which is used to describe the axis"],["ReverseCoordTranslate","The trait indicates that the coordinate system supports reverse transform This is useful when we need an interactive plot, thus we need to map the event from the backend coordinate to the logical coordinate"],["ReversibleRanged","The trait indicates the ranged value can be map reversely, which means an pixel-based coordinate is given, it's possible to figure out the underlying logic value."],["ToGroupByRange","The trait that provides method `Self::group_by` function which creates a `GroupBy` decorated ranged value."]]});
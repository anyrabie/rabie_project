export function TypographyH2({data}) {
    return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {data}
      </h2>
    )
  }
  export function TypographyH3({data}) {
      return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {data}
        </h3>
      )
    }
    export function TypographyH4({data}) {
      return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {data}
        </h4>
      )
    }
    export function TypographyMuted({Data}) {
      return (
        <p className="text-sm text-muted-foreground">{Data}</p>
      )
    }
  
    
        
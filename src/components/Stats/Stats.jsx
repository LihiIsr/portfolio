import StatCard from './StatCard'

export default function Stats() {
  return (
    <>
    <StatCard  
      from={0}
      to={5}
      duration={1}>
      happy clients</StatCard>

    <StatCard  
      from={4000}
      to={4200}
      duration={5}>
      hours of loving what i do</StatCard>
    </>
  )
}

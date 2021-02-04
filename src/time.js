export const getTimeSinceStartOfDay = time => new Date(`01/01/1970 ${time}`).getTime()

export const canTravel = currentTime => {
  const millis = getTimeSinceStartOfDay(currentTime)

  const earlyBusyMillisStart = getTimeSinceStartOfDay('08:00')
  const earlyBusyMillisEnd = getTimeSinceStartOfDay('10:00')
  
  if (millis >= earlyBusyMillisStart && millis <= earlyBusyMillisEnd) {
    return false
  }

  const lateBusyMillisStart = getTimeSinceStartOfDay('16:00')
  const lateBusyMillisEnd = getTimeSinceStartOfDay('18:00')

  if (millis >= lateBusyMillisStart && millis <= lateBusyMillisEnd) {
    return false
  }

  return true
}

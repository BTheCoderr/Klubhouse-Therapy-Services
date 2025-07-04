import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Klubhouse Therapy Services',
  description: 'At Klubhouse Therapy Services, CHRIS means Compassion and Care at Home.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* Hidden form stubs for Netlify form detection at build time */}
        <div style={{ display: 'none' }}>
          {/* Contact form stub */}
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <input name="bot-field" />
            <input name="name" />
            <input type="email" name="email" />
            <input type="tel" name="phone" />
            <textarea name="message"></textarea>
          </form>

          {/* Simple intake form stub */}
          <form name="simple-intake" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="simple-intake" />
            <input name="bot-field" />
            <input name="childName" />
            <input type="email" name="parentEmail" />
            <input type="tel" name="phone" />
            <textarea name="notes"></textarea>
          </form>

          {/* Full intake form stub */}
          <form name="intake" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="intake" />
            <input name="bot-field" />
            <input name="childName" />
            <input name="age" />
            <input type="date" name="date" />
            <input name="completedBy" />
            <input name="relationship" />
            <select name="legalGuardian">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <input name="clientsInsurance" />
            <input name="memberID" />
            <textarea name="primaryCarePhysician"></textarea>
            <textarea name="allergies"></textarea>
            <textarea name="lifeThreatening"></textarea>
            <textarea name="allergicInstructions"></textarea>
            <textarea name="dietaryRestrictions"></textarea>
            <input type="radio" name="overallHealth" value="Excellent" />
            <input type="radio" name="overallHealth" value="Very good" />
            <input type="radio" name="overallHealth" value="Good" />
            <input type="radio" name="overallHealth" value="Not very good" />
            <input type="radio" name="overallHealth" value="Poor" />
            <input type="checkbox" name="psychConditions" value="Anxiety" />
            <input type="checkbox" name="psychConditions" value="Depression" />
            <input type="checkbox" name="psychConditions" value="Suicidal" />
            <input type="checkbox" name="psychConditions" value="Sleeping issues" />
            <input type="checkbox" name="psychConditions" value="Feeding/eating issues" />
            <input type="checkbox" name="psychConditions" value="Autism" />
            <input type="checkbox" name="psychConditions" value="Bi-polar disorder" />
            <input type="checkbox" name="psychConditions" value="ADHD" />
            <textarea name="primaryLanguage"></textarea>
            <textarea name="legalIssues"></textarea>
            <textarea name="spiritualNeeds"></textarea>
            <textarea name="culturalVariables"></textarea>
            <input type="checkbox" name="schoolSettings" value="Gifted" />
            <input type="checkbox" name="schoolSettings" value="Advance/Gifted" />
            <input type="checkbox" name="schoolSettings" value="Special ED inclusion" />
            <input type="checkbox" name="schoolSettings" value="Regular Education" />
            <input type="checkbox" name="schoolSettings" value="Special ED self contained" />
            <input type="checkbox" name="schoolSettings" value="Private School" />
            <input type="checkbox" name="schoolSettings" value="Daycare" />
            <input type="checkbox" name="schoolSettings" value="My child currently has an IEP" />
            <input name="schoolName" />
            <input name="grade" />
            <input name="schoolAddress" />
            <input name="schoolContact" />
            <input name="teacherName" />
            <input type="tel" name="teacherPhone" />
            <textarea name="childResidesWith"></textarea>
            <input name="behavioralProviderName" />
            <input type="email" name="behavioralProviderEmail" />
            <input type="tel" name="behavioralProviderPhone" />
            <input type="checkbox" name="contactBehavioralProvider" value="yes" />
            <textarea name="therapeuticIntervention"></textarea>
            <textarea name="interventionResponse"></textarea>
            <input name="communityProviderName" />
            <input type="email" name="communityProviderEmail" />
            <input type="tel" name="communityProviderPhone" />
            <input type="checkbox" name="contactCommunityProvider" value="yes" />
            <textarea name="communityResourceNotes"></textarea>
          </form>
        </div>
      </body>
    </html>
  )
} 
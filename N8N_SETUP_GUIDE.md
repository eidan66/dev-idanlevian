# n8n Workflows Setup Guide

I've created two n8n workflows for your portfolio website! 🎉

## ✅ Workflows Created

### 1. **Portfolio Contact Form** (ID: `aueZVmtd87w2bejv`)
- **Webhook URL**: `https://n8n.idanlevian.com/webhook/portfolio-contact`
- **Purpose**: Receives and stores contact form submissions
- **Status**: Created (inactive - needs configuration)

### 2. **Portfolio Analytics Tracker** (ID: `aSGEewTYulrWeyJz`)
- **Webhook URL**: `https://n8n.idanlevian.com/webhook/portfolio-analytics`
- **Purpose**: Tracks pageviews and visitor analytics
- **Status**: Created (inactive - needs configuration)

---

## 🔧 Configuration Steps

### Step 1: Open n8n
Go to your n8n instance: https://n8n.idanlevian.com

### Step 2: Configure Contact Form Workflow

1. **Open the workflow**: Find "Portfolio Contact Form" in your workflows list
2. **Configure Google Sheets node**:
   - Click on the "Save to Google Sheets" node
   - Click "Select Document" and choose or create a Google Sheet
   - Click "Select Sheet" and choose or create a sheet (e.g., "Contact Submissions")
   - The columns will auto-map from the data:
     - Timestamp
     - Name
     - Email
     - Message
     - Budget
     - Has File
     - File Name

3. **Activate the workflow**: Click the toggle at the top to activate

### Step 3: Configure Analytics Workflow

1. **Open the workflow**: Find "Portfolio Analytics Tracker" in your workflows list
2. **Configure Google Sheets node**:
   - Click on the "Save to Google Sheets" node
   - Click "Select Document" and choose or create a Google Sheet (can be the same or different)
   - Click "Select Sheet" and choose or create a sheet (e.g., "Analytics")
   - The columns will auto-map from the data:
     - Timestamp
     - Path
     - Referrer
     - Date
     - Time

3. **Activate the workflow**: Click the toggle at the top to activate

---

## 📊 Google Sheets Setup (Recommended)

### For Contact Form:
Create a Google Sheet with these column headers (optional, but recommended):
```
Timestamp | Name | Email | Message | Budget | Has File | File Name
```

### For Analytics:
Create a Google Sheet with these column headers (optional, but recommended):
```
Timestamp | Path | Referrer | Date | Time
```

**Note**: n8n will auto-create columns if they don't exist, but having headers makes it cleaner.

---

## 🔗 Webhook URLs (Already Configured in .env.local)

Your environment variables have been updated:

```bash
NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL=https://n8n.idanlevian.com/webhook/portfolio-contact
NEXT_PUBLIC_N8N_ANALYTICS_WEBHOOK_URL=https://n8n.idanlevian.com/webhook/portfolio-analytics
```

---

## 🧪 Testing the Workflows

### Test Contact Form:
1. Run your Next.js app: `yarn dev`
2. Fill out the contact form on your portfolio
3. Submit the form
4. Check your Google Sheet - you should see a new row!

### Test Analytics:
1. Run your Next.js app: `yarn dev`
2. Visit your portfolio homepage
3. Check your Google Sheet - you should see a new pageview entry!

---

## 📋 Workflow Details

### Contact Form Workflow Flow:
```
Webhook (POST) → Format Data → Save to Google Sheets → Respond Success
```

**Data Received:**
- `name` - Contact name
- `email` - Email address
- `message` - Message content
- `budget` - Budget range
- `file` - File object (if uploaded)
- `timestamp` - Submission time

**Data Stored:**
- All form fields
- File name (if uploaded)
- "Has File" indicator (Yes/No)

### Analytics Workflow Flow:
```
Webhook (POST) → Format Data → Save to Google Sheets
```

**Data Received:**
- `path` - Page path (e.g., "/")
- `timestamp` - ISO timestamp
- `referrer` - Referrer URL (optional)

**Data Stored:**
- Path
- Timestamp
- Referrer (or "Direct" if none)
- Date (formatted: YYYY-MM-DD)
- Time (formatted: HH:mm:ss)

---

## 🔒 Security Notes

1. **Webhook URLs are public** - They're in your frontend code, which is expected
2. **No sensitive data** - Only form data and analytics are sent
3. **Rate limiting** - Consider adding rate limiting in n8n if needed
4. **Data validation** - The frontend validates data with Zod before sending

---

## 🎨 Optional Enhancements

### Add Email Notifications (Contact Form):
1. Add a "Send Email" node after "Format Contact Data"
2. Configure it to send you an email notification when someone submits the form

### Add Bot Filtering (Analytics):
1. Add a "Filter" node after "Analytics Webhook"
2. Filter out common bot user agents or suspicious patterns

### Add Data Aggregation (Analytics):
1. Add a "Code" node to aggregate daily/weekly stats
2. Create a separate sheet for aggregated data

---

## 🐛 Troubleshooting

### Workflow not receiving data:
1. Check that the workflow is **activated** (toggle on)
2. Verify the webhook URL in `.env.local` matches the workflow path
3. Check n8n execution history for errors

### Google Sheets not saving:
1. Make sure you've authenticated with Google in n8n
2. Check that the document and sheet are selected
3. Verify the Google account has write permissions

### Data not appearing:
1. Check n8n execution history - click on the workflow and view executions
2. Look for error messages in the execution log
3. Verify the data format matches what the workflow expects

---

## 📚 Next Steps

1. ✅ Configure Google Sheets in both workflows
2. ✅ Activate both workflows
3. ✅ Test the contact form
4. ✅ Test analytics tracking
5. ✅ Monitor the data in your Google Sheets
6. 🎉 Deploy your portfolio!

---

## 🔗 Useful Links

- **n8n Instance**: https://n8n.idanlevian.com
- **Contact Form Workflow**: https://n8n.idanlevian.com/workflow/aueZVmtd87w2bejv
- **Analytics Workflow**: https://n8n.idanlevian.com/workflow/aSGEewTYulrWeyJz

---

## 💡 Pro Tips

1. **Backup your workflows**: Export them from n8n regularly
2. **Monitor executions**: Check the execution history to catch issues early
3. **Set up alerts**: Configure n8n to alert you on workflow failures
4. **Use test data**: Test with dummy data before going live
5. **Check quotas**: Be aware of Google Sheets API quotas if you expect high traffic

---

Need help? The workflows are ready to go - just configure the Google Sheets connections and activate them! 🚀
